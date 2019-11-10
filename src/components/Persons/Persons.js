import React, { PureComponent } from "react";
import Person from "./Person/Person";

//PureComponent is a component that already have implemented shouldComponentUpdate and check any changes on props
class Persons extends PureComponent {

  getSnapshotBeforeUpdate() {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshopt!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering ...", this.props.isAuthenticated);
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
