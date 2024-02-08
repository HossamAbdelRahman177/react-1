import avataaars from "../Assets/images/avataaars.svg"
export default function Home() {
  return <>
    <div className="main-color py-5">
      <div className="container py-4">
        <img src={avataaars} className=" size-imge d-block m-auto mt-5 my-4" alt="avataaars" />
        <div>
          <h1 className="text-center mt-3 text-white fw-bold">START FRAMEWORK</h1>
        </div>
        <div className="d-flex py-4 w-25 justify-content-around m-auto">
          <div className="line-start">
          </div>
          <i className="fa-solid fa-star px-4 text-white "></i>
          <div className="line-start">
          </div>

        </div>
        <h6 className="text-center pb-5 text-white">Graphic Artist - Web Designer - Illustrator</h6>
      </div>
    </div>


  </>
}