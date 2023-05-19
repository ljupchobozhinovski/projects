import { PostType } from '@/Types/types';
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  awards: PostType[];
}

const Reward = ({ awards }: Props) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
  };

  return (
    <div className='container'>
      <div className="row">
        <h2 className='text-center'>Наши</h2>
        <h2 className='text-danger text-center'>признанија</h2>
        <div className="col">
          <Slider {...settings}>
            {awards.map((award) => {
              return (
                <>
                  <div key={award.id} className="card mb-3 text-center">

                    <img src={`../../images/driveGoogle/awards/${award.images[0]}`} className="card-img-top" alt={award.title} />
                    <div className="card-body">
                      <h5 className="card-title bg-danger"></h5>
                      <button type="button" className="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target={`#${award.id}`}>
                        {award.title}
                      </button>
                    </div>
                    <h6>{award.category}</h6>
                    <small>{award.shortDescription}</small>
                  </div>

                  <div className="modal fade" id={award.id} tabIndex={-1} aria-labelledby={`${award.id}-label`} aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id={`${award.id}-label`}>{award.title}</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <h2>{award.title}</h2>
                          <img src={award.images[0]} className="card-img-top" alt={award.title} />
                          <h5>{award.longDescription}</h5>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Reward