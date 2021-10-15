import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
export default function ModalSnap({showModal, setShowModal}) {

    function closeModal(){
        setShowModal(false)
    }
    return (
        <div className="showModal">
        <Modal isOpen={showModal} onRequestClose={closeModal}
        style={
            {
                overlay:{
                    background:"transparent",
                },
                content:{
                    color:'red',
                    width:"400px",
                    height:"400px",
                    background:"black",
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    zIndex:"1000",
                }
            }
            }>
            <div className="modal_snap">
                <div onClick={closeModal} className="cross_exit"><i className="fas fa-times"></i></div>
                <img src="/Logo_WolfCars/snapchat_qrcode.jpg" alt="snap"/>
            </div>
        </Modal>
    </div>
    )
}
