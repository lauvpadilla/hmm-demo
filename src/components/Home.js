import React from "react";
import * as Icon from "react-feather";

import features from "../data/features";

const Features = ({ feature }) => (
  <li className="f5 f5-l mb4 fw5">
    <Icon.ArrowRight size={18} color={"green"} />
    {feature}
  </li>
);

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="fw5 f3 mb4">
          {" "}
          <Icon.Package size={26} />
          Background
        </h1>
        <p className="f5 w-60-l w-100 lh-copy mb4">
          HMM, “Hazardous Materials Management”, is a system that allows us to
          fulfill best in class chemical management services for our Aerospace
          customers, by tracking container level inventory, chemical constituent
          data, product safety data sheets, quality documentation, and more. 
        </p>
        <p className="f5 w-60-l w-100 lh-copy mb4">
          Currently HMM interfaces with 3 different ERP systems (Oracle, QAD)
          and a mobile app (primarily used for scanning inventory). For a map of
          the current state in HMM, please refer to{" "}
          <a
            href="/downloads/hmmCurrentState2017.png"
            download
            className="link"
          >
            HMM Current State.
          </a>{" "}
        </p>
        <p className="f5 w-60-l w-100 lh-copy mb5">
          For more background information on current HMM, please refer to the{" "}
          <a
            href="/downloads/summa_hmmResearchFindings2017.pdf"
            download
            className="link"
          >
            HMM Research Findings
          </a>{" "}
          provided by Summa.
        </p>

        <h1 className="fw5 f3 mb4">
          {" "}
          <Icon.Tool size={26} />
          What problems are we solving?
        </h1>
        <p className="f5 w-60-l w-100 lh-copy mb4">
          HMM changes the old architecture design of completely segregated
          customer instances, and the new open model greatly increases our
          ability to improve labor and data efficiencies. The new HMM will make
          information transfer between the different systems more seamless and
          reduce errors that can occur between them.
        </p>
        <p className="f5 w-60-l w-100 lh-copy mb5">
          Processes previously handled manually are now digitized, improving
          accuracy and traceability.
        </p>
        <h1 className="fw5 f3 mb4">
          <Icon.Code size={28} />
          Why the re-write?
        </h1>
        <p className="f5 w-60-l w-100 lh-copy mb4">
          The “UX” project is a rewrite of the current system, to bring a
          better, more modern and attractive user experience, and to streamline
          the work processes for users.
        </p>
        <p className="f5 w-60-l w-100 lh-copy mb4">
          Some of the new improvements and features include:
        </p>
        <ul>
          {features.map((feature, id) => (
            <Features {...feature} key={id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
