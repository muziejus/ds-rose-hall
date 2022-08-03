import Component from "@glimmer/component";
import { service } from "@ember/service";
import AnnotationsService from "un-silencing-slavery/services/annotations";
import { htmlSafe } from "@ember/template";

export default class GlossaryComponent extends Component {
  @service declare annotations: AnnotationsService;
}
