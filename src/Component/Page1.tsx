import React from "react";
import api from "../api";
import { Page1DispatchPtops, Page1StateProps } from "../Container/Page1Connect";

type Page1Props = Page1DispatchPtops & Page1StateProps;

export default class Page1 extends React.Component<Page1Props> {
  componentDidMount() {
    const { catalog, addCatalog } = this.props;
    if (Object.keys(catalog).length === 0) {
      api
        .get("/universe")
        .then(res => addCatalog(res.data))
        .catch(err => err);
    }
  }
  render() {
    console.log("ici ", this.props.catalog);
    return <div>{"toto"}</div>;
  }
}

/* Data from api
{
  "reference": "haircut",
    "title": "Coiffure",
      "categories": [
        {
          "reference": "man",
          "title": "Homme",
          "prestations": [
            {
              "reference": "man_shampoo",
              "title": "Shampoing",
              "duration": 10,
              "price": 500
            },
            {
              "reference": "man_haircut",
              "title": "Coupe",
              "duration": 30,
              "price": 2690
            },
            {
              "reference": "man_color",
              "title": "Couleur",
              "duration": 45,
              "price": 2900
            },
            {
              "reference": "beard_trim",
              "title": "Taille de la barbe",
              "duration": 15,
              "price": 2000
            },
            {
              "reference": "beard_shave",
              "title": "Rasage",
              "duration": 15,
              "price": 2000
            }
          ]
        },
        {
          "reference": "woman",
          "title": "Femme",
          "prestations": [
            {
              "reference": "woman_shampoo",
              "title": "Shampoing",
              "duration": 10,
              "price": 400
            },
            {
              "reference": "woman_haircare",
              "title": "Soin profond",
              "duration": 10,
              "price": 1000
            },
            {
              "reference": "woman_haircut",
              "title": "Coupe classique",
              "duration": 30,
              "price": 2990
            },
            {
              "reference": "creative_haircut",
              "title": "Coupe création",
              "duration": 45,
              "price": 3990
            },
            {
              "reference": "brushing",
              "title": "Brushing (courts et mi-longs)",
              "duration": 20,
              "price": 2990
            },
            {
              "reference": "brushing_long_hair",
              "title": "Brushing (longs)",
              "duration": 40,
              "price": 3990
            },
            {
              "reference": "woman_color",
              "title": "Couleur (racines)",
              "duration": 45,
              "price": 6090
            },
            {
              "reference": "woman_fullcolor",
              "title": "Couleur complète",
              "duration": 75,
              "price": 8090
            },
            {
              "reference": "tie_and_dye",
              "title": "Ombré hair",
              "duration": 90,
              "price": 9090
            },
            {
              "reference": "woman_streaks",
              "title": "Mèches",
              "duration": 120,
              "price": 8090
            },
            {
              "reference": "woman_hair_highlighting",
              "title": "Balayage",
              "duration": 120,
              "price": 8090
            },
            {
              "reference": "haircare_patina",
              "title": "Patine",
              "duration": 15,
              "price": 1990
            },
            {
              "reference": "complex_brushing",
              "title": "Brushing élaboré",
              "duration": 40,
              "price": 3990
            },
            {
              "reference": "evening_brushing",
              "title": "Coiffure de soirée (chignon, tresses, attaches…)",
              "duration": 45,
              "price": 5990
            },
            {
              "reference": "sophisticated_hairdressing",
              "title": "Coiffure de mariée",
              "duration": 90,
              "price": 9900
            },
            {
              "reference": "hairdressing_bride_with_test",
              "title": "Coiffure de mariage avec essai",
              "duration": 90,
              "price": 21900
            },
            {
              "reference": "brazilian_smoothing",
              "title": "Lissage brésilien",
              "duration": 180,
              "price": 19900
            }
          ]
        },
        {
          "reference": "child",
          "title": "Enfant",
          "prestations": [
            {
              "reference": "child_haircut",
              "title": "Coupe",
              "duration": 20,
              "price": 1990
            },
            {
              "reference": "child_hairdressing",
              "title": "Coiffure enfant (chignon, tresse, attache...)",
              "duration": 30,
              "price": 3990
            }
          ]
        }
      ]
}
*/
