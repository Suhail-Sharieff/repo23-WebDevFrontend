function Greet() {

    const userName="Suhail";

    //this content is parsed bu JSX....means (here), a node called h1 is creted having its attribute and values etc...note that we dont need to pass using ${userName} likme conveentional JS, the react auto parses "{stuff}" into "${stuff}"
    return (<>
        <h1 className="text-yellow-600 text-2xl bg-black text-center">This is a greet by {userName}</h1>
    </>)
}
export default Greet