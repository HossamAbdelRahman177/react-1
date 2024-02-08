export default function Footer() {
    return <>
        <footer className=" bg-app">
            <div className="container p-5 ">
                <div className="row text-white">
                    <div className="col-md-4">
                        <div className="item text-center p-4">
                            <h3>LOCATION</h3>
                            <h6 className="">2215 John Daniel Drive</h6>
                            <h6>Clark, MO 65243</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item text-center p-4">
                            <h3>AROUND THE WEB</h3>
                           <div className="w-50 m-auto d-flex justify-content-around ">
                                <li className=" fs-5 list-group"><i class="fa-brands fa-facebook"></i></li>
                                <li className=" fs-5 list-group"><i class="fa-brands fa-twitter"></i></li>
                                <li className=" fs-5 list-group"><i class="fa-brands fa-linkedin"></i></li>
                                <li className=" fs-5 list-group"><i class="fa-solid fa-globe"></i></li>
                           </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="item text-center p-4">
                            <h3>ABOUT FREELANCER</h3>
                            <p className="small">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-light text-center p-4">
                <h6>Copyright © Your Website 2021</h6>
            </div>
        </footer>

    </>
}