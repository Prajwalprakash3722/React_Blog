import { Helmet } from "react-helmet";

function Meta({ title, description }) {
  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="App Description" />
      </Helmet>
    </div>
  );
}

export default Meta;
