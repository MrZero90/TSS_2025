package com.api;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;

import com.api.entities.PhoneData;
import com.api.utilities.ApiUtilities;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Main {
    public static void main(String[] args) {
        String apiURL = "https://api.restful-api.dev/objects";
        HttpResponse<String> response = ApiUtilities.getAllDataFromApi(apiURL);

        
        // HttpRequest request = HttpRequest.newBuilder()
        // .GET()
        // .uri(URI.create("https://api.restful-api.dev/objects"))
        // .build();
        
        // HttpResponse<String> response = null;
        
        // try {
            //     response = HttpClient.newHttpClient()
            //     .send(request, HttpResponse.BodyHandlers.ofString());
            // } catch (IOException e) {
                //     // TODO Auto-generated catch block
                //     e.printStackTrace();
                // } catch (InterruptedException e) {
                    
                //     e.printStackTrace();
                // }
                
                // System.out.println(response.statusCode());
                // System.out.println(response.body());
                
                ObjectMapper objectMapper = new ObjectMapper();
                try {
            List<PhoneData> datasToStore = objectMapper.readValue(response.body(), new TypeReference<List<PhoneData>>() {});
            
            try (BufferedWriter writer = new BufferedWriter(new FileWriter("phones.txt"))) {
                // Prepare to track missing IDs
                StringBuilder missingIdLine = new StringBuilder();
                missingIdLine.append("Missing IDs: ");
                
                // It will be used to track the expected ID
                int count = 0;
                
                for (PhoneData phoneData : datasToStore) {
                    StringBuilder line = new StringBuilder();
                    count++;
                    // Add IDs to the string if it's missing
                    if(count != phoneData.getId()){
                        missingIdLine.append(count).append(", ");
                        // Update count to the current ID to continue checking
                        count = phoneData.getId();
                    }
                    // Clear the StringBuilder for the next line
                    line.delete(0, line.length());
                    // Format the line to write
                    line.append("ID: ").append(phoneData.getId());
                    line.append(", Name: ").append(phoneData.getName());
                    // Handle potential null value for data
                    if (phoneData.getData() != null) {
                        line.append(", Data: ").append(phoneData.getData().toString());
                    } else {
                        line.append(", Data: null");
                    }
                    // Write all phone datas to the file
                    writer.write(line.toString());
                    writer.newLine();
                    
                }
                // Write summary
                
                writer.newLine();
                
                StringBuilder statusCodeLine = new StringBuilder();
                statusCodeLine.append("Response Status Code: ").append(response.statusCode());
                writer.write(statusCodeLine.toString());
                writer.newLine();

                StringBuilder headerLine = new StringBuilder();
                headerLine.append(("Total objects found: ")).append(datasToStore.size());
                writer.write(headerLine.toString());
                writer.newLine();
                
                // Remove trailing comma and space if there are missing IDs
                if(missingIdLine.toString().endsWith(", ")){
                    missingIdLine.setLength(missingIdLine.length() - 2); // Remove trailing comma and space
                } else {
                    missingIdLine.append("None");
                }
                
                // Write the missing IDs line at the end
                writer.write(missingIdLine.toString());
                writer.newLine();
            } catch (IOException e) {
                System.err.println("Failed to write to file: " + e.getMessage());
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

    }        
}