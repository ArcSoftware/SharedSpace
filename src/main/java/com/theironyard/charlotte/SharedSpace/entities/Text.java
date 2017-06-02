package com.theironyard.charlotte.SharedSpace.entities;


import java.util.ArrayList;
import java.util.List;


public class Text {
    public String text;
    public List<Attachment> attachments;

    public static class Attachment {
        public List <Field> fields;

        public Attachment() {
        }

        public Attachment(List<Field> fields) {
            this.fields = fields;
        }
    }

    public static class Field {
        public String title;
        public String value;
    }

    public Text() {
    }

    public Text(List <Field> fields) {
        this.attachments = new ArrayList<>();

        attachments.add(new Attachment(fields));
    }
}
