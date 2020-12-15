import { Component, OnInit } from "@angular/core";
import { User } from "./models/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "mentions-app";

  names: string[] = ["Aditya", "Prabhaat", "Pranathi", "Sanath nagar sathi"];

  id: number = 0;
  users: User[] = [];

  items: User[] = [];
  includedItems: User[] = [];

  mentionConfig = {};

  ngOnInit(): void {
    this.initMentions();
    this.initUserData();
  }

  initUserData(): void {
    this.names.forEach((n) => {
      this.users.push(this.getUser(n));
    });
  }

  private getUser(name: string): User {
    return new User({ id: this.id++, name: name });
  }

  initMentions(): void {
    this.mentionConfig = {
      triggerChar: "@",
      items: this.items,
      labelKey: "name",
    };
  }

  public onSearch(data: string) {
    if (data.length >= 3) {
      this.items = this.users.filter((n) => {
        const isNameIncluded =
          this.includedItems.findIndex(
            (i) =>
              i.name.toLocaleLowerCase().trim() ===
              n.name.toLocaleLowerCase().trim()
          ) !== -1;

        console.log(`name: ${n.name}, included: ${isNameIncluded}`);
        return (
          n.name
            .toLocaleLowerCase()
            .trim()
            .startsWith(data.toLowerCase().trim()) && !isNameIncluded
        );
      });

      this.initMentions();
    }
  }

  public onNameSelected(item: User) {
    console.log("Selected Item", item);
    this.includedItems.push(item);
    this.items = [];
    this.initMentions();
  }
}
