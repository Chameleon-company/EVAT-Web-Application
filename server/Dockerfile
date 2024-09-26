FROM node:20-buster

# Set the working directory
WORKDIR /app

# Install Python and pip
RUN apt-get update 

# RUN apt-get install -y python3 python3-pip
    # && rm -rf /var/lib/apt/lists/*  # Clean up apt cache to reduce image size

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies

RUN npm install --production

# # Install Python dependencies
# RUN pip3 install overpy numpy lru_cache \
#     && pip3 install -U scikit-learn \
#     && python3 -m pip install pymongo
    # && rm -rf /root/.cache/pip  # Clean up pip cache to reduce image size

# Copy the rest of the application code
COPY . .

# Expose the port your application will run on
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
