package com.theironyard.charlotte.SharedSpace.services;

import com.theironyard.charlotte.SharedSpace.models.ImgurData;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ImageService {
    RestTemplate template;

    public ImageService(RestTemplate template) {
        this.template = template;
    }

    public String getLink(String img) {
        img = img.equalsIgnoreCase("jake") ? "TvVstfB": img;
        img = img.equalsIgnoreCase("suman") ? "CGwecZo": img;
        img = img.equalsIgnoreCase("nick") ? "LBWodCP": img;
        img = img.equalsIgnoreCase("logo") ? "UIsOTlZ": img;

        HttpHeaders headers = new HttpHeaders();
        List<String> authheaders = new ArrayList<>();
        authheaders.add(String.format("Client-ID %s", System.getenv("ISK")));
        headers.put("authorization", authheaders);
        Map<String, String> imageMap = new HashMap<>();
        imageMap.put("id", img);
        HttpEntity<ImgurData> data = new HttpEntity<>(new ImgurData(), headers);
        HttpEntity<ImgurData> response = template.exchange("https://api.imgur.com/3/image/{id}",
                HttpMethod.GET, data, ImgurData.class, imageMap);

        return response.getBody().getData().getLink();
    }
}
