import React from "react";

const PhotoModal = (props) => {

    return (
        <>
            <button id="button" type="button" className="btn btn-light p-0" style={{borderRadius: "3vw", background:  "transparent", border: "0px"}} data-toggle="modal" data-target="#photoModal">
                <img src={props.img} alt='adnan' style={{borderRadius: "3vw", width: "75%"}} ></img>
            </button>

            {/* Cannot get this modal to appear on screen */}
            <div className="modal fade" id="photoModal" tabIndex="-1" role="dialog" aria-labelledby="photoModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="photoModalLabel">{props.description}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={props.image} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoModal;