export class Post {
  username: String;
  title: String;
  text: String;
  image: String;
  comments: Number;

  constructor(username, title, text, image, comments) {
    this.username = username;
    this.title = title;
    this.text = text;
    this.image = image;
    this.comments = comments;
  }
}
