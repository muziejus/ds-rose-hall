import Component from "@glimmer/component";
import { htmlSafe } from "@ember/template";
import { scaleLinear } from "d3";
import { service } from "@ember/service";
import SvgService from "un-silencing-slavery/services/svg";

interface CommunityTreePersonGradientComponentArgs {
  person: Person;
}

export default class CommunityTreePersonGradientComponent extends Component<CommunityTreePersonGradientComponentArgs> {
  @service declare svg: SvgService;

  // this should be passed in by the parent component.
  colorScale() {
    return scaleLinear().domain([0, 80]).range([0, 1]);
  }

  get stops() {
    const birthYear = this.args.person.birthYear;
    const exitYear = this.args.person.exitYear;
    if (birthYear && exitYear) {
      let ageAtStart = 0;
      if (birthYear < 1817) {
        ageAtStart = 1817 - birthYear;
      }
      const ageAtExit = exitYear - birthYear;
      const stopScale = scaleLinear()
        .domain([0, 100])
        .range([ageAtStart, ageAtExit]);
      const offsets = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      return offsets.map((element) => {
        return {
          offset: `${element}%`,
          style: htmlSafe(`stop-opacity: ${1 - Math.random() / 2.5}; 
        stop-color: ${this.svg.gradient(
          this.colorScale()(stopScale(element))
        )};`),
        };
      });
    } else {
      return [
        {
          offset: "90%",
          style: htmlSafe(`stop-opacity: 1; stop-color: #94a3b8;`),
        },
        {
          offset: "100%",
          style: htmlSafe(`stop-opacity: 1; stop-color: #475569;`),
        },
      ];
    }
  }
}
