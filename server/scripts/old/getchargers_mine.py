import overpy
import json
import sys

lat = sys.argv[1]
lon = sys.argv[2]

def checkStreet(point):
    if("addr:housenumber" in point.keys() and "addr:street" in point.keys()):
        address = point["addr:housenumber"] +" "+ point["addr:street"]
        address += point["addr:suburb"]+"," if "addr:suburb" in point.keys() else ""
        address += point["addr:state"]+"," if "addr:state" in point.keys() else ""
        return address
    else:
        return "undefined"


def get_amenities(gps_coordinates, radius=20000):
    """Retrieves amenities from OSM at a given radius from a single OR multiple gps points

    Args:
        gps_coordinates (list | tuple): A list containing lat and lon values, or a tuple containing multiple lists
        radius (int, optional): Radius distance from GPS location to search. Defaults to 100.

    Returns:
        list: List of amenities in the format of Dictionaries
    """        
    api = overpy.Overpass()
    amenities_list = []

    #if gps_coordinates is a single tuple then wrap in list
    if not isinstance(gps_coordinates[0], list):
        gps_coordinates = [gps_coordinates]

    #use the gps coordinates and distance to get data around point OR points
    for coords in gps_coordinates:
        lat, lon = coords
        query = f"""
        [out:json];
        (
          node["amenity"="charging_station"](around:{radius},{lat},{lon});
          way["amenity"="charging_station"](around:{radius},{lat},{lon});
          relation["amenity"="charging_station"](around:{radius},{lat},{lon});
        );
        out center;
        """
        result = api.query(query)

        for node in result.nodes:
            point = node.tags
            point["id"] = node.id
            point["lat"] = float(node.lat)
            point["lon"] = float(node.lon)
            point["address"] = checkStreet(point)
            amenities_list.append(point)

        for way in result.ways:
            point = way.tags
            point["id"] = way.id
            point["lat"] = float(way.center_lat)
            point["lon"] = float(way.center_lon)
            point["address"] = checkStreet(point)
            amenities_list.append(point)

        for rel in result.relations:
            point = rel.tags
            point["id"] = rel.id
            point["lat"] = float(rel.center_lat)
            point["lon"] = float(rel.center_lon)
            point["address"] = checkStreet(point) 
            amenities_list.append(point)
        print(amenities_list)

    return amenities_list


# Example usage
if __name__ == "__main__":

    #run a simple test
    gps_coordinates = [lat, lon]  # Example: Norman Park
    list_of_amenities = get_amenities(gps_coordinates)
    jsonData = json.dumps(list_of_amenities, indent=2)
    with open('test_amenitites_local.json', 'w', encoding='utf-8') as f:
        json.dump(list_of_amenities, f)


    print(jsonData)