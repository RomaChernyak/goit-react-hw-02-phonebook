import { Component } from "react";
import { Section, Form } from "components";
import interfaceInfo from "../../backend/interfaceInfo.json";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  
  render() {
    return (
      <>
        <Section title={"Phonebook"}>
          <Form
            data={interfaceInfo}
          />
        </Section>
        <Section title={"Contacts"}>
          {/* {
            this.countTotalFeedback()
                ?
                (<Statistics
                    state={this.state}
                    buttons={buttons}
                    total={this.countTotalFeedback}
                    positivePercentage={this.countPositiveFeedbackPercentage}
                />)
                :
                (<Notification message={message} />)
          } */}
        </Section>
      </>
    );
  }
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
