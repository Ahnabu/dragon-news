

import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import LSNav from "../Shared/LSNav/LSNav";
import NavBar from "../Shared/Navbar/Navbar";
import RSNav from "../Shared/RSNav/RSNav";


const Home = () => {
    return (
        <div className="w-[100vw] border">
           
            <Header></Header>
            <NavBar></NavBar>
           <BreakingNews></BreakingNews>
            <div className="grid lg:grid-cols-4 grid-cols-1 w-full gap-5 border">
                <div><LSNav></LSNav> </div>
                <div className="col-span-2 border">
                    <h2 className="text-3xl ">news comming , wait for it</h2>
                </div>
                <div className="border"><RSNav></RSNav> </div>
            </div>
           
        </div>
    );
};

export default Home;