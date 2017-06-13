package com.theironyard.charlotte.SharedSpace.models;

public class ImgurData {
    private boolean success;
    private int status;
    private ImgurImage data;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public ImgurImage getData() {
        return data;
    }

    public void setData(ImgurImage data) {
        this.data = data;
    }

    public static class ImgurImage {
        private String title;
        private String link;
        private Long datetime;
        private int width;
        private int height;

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getLink() {
            return link;
        }

        public void setLink(String link) {
            this.link = link;
        }

        public Long getDatetime() {
            return datetime;
        }

        public void setDatetime(Long datetime) {
            this.datetime = datetime;
        }

        public int getWidth() {
            return width;
        }

        public void setWidth(int width) {
            this.width = width;
        }

        public int getHeight() {
            return height;
        }

        public void setHeight(int height) {
            this.height = height;
        }
    }
}
