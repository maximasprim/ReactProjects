const Personal = ({ name, moreDetails, islogged, langs }) => {
  return (
    <>
      <h2>Heyy,my name is {name}</h2>
      <p>My height is {moreDetails.height}</p>
      <p> {islogged ? " im logged in" : "im not logged in"}</p>

      <div>Favourite programming languages</div>

      <ul style={{ listStyle: "none", backgroundColor: "lightGreen" }}>
        {langs &&
          langs.map((lang, index) => {
            return <li key={index}>{lang}</li>;
          })}
      </ul>
    </>
  );
};
export default Personal;
