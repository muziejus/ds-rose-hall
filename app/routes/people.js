import Route from "@ember/routing/route";

export default class PeopleRoute extends Route {
  metaInfo = {
    title: "People | (Un)Silencing Slavery",
  };

  async model() {
    const people = await this.modelFor("index");
    return people;
  }
}
