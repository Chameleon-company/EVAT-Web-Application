
const PersonalDetailsForm = () => (

    <View style={styles.container}>
      <DetailItem label="First Name" />
      <DetailItem label="Last Name" />
      <DetailItem label="Date Of Birth" />

      <DetailItem label="Contact Phone" />  
      <View style={styles.editContainer}>
        <Text>Edit</Text>
        <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/190e061be7e3f0ec084df0eab514c1e398350e0d89850e44205d77c5b5812541?placeholderIfAbsent=true&apiKey=4e04c94ff895435db4776a62935fdc41" }}
        style={styles.editIcon}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      backgroundColor: 'rgba(27, 48, 185, 1)',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'stretch',
      fontSize: 14,
      padding: '12px 9px',
    },
    editContainer: {
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignSelf: 'flex-end',
        display: 'flex',
        marginTop: 9,
        alignItems: 'stretch',
        gap: 14,
        flexDirection: 'row',
        padding: '4px 13px',
      },
      editIcon: {
        width: 18,
        aspectRatio: 1,    
      },
    });


export default PersonalDetailsForm;