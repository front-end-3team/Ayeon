function DoctorsImg2({ title, text, rank, content, image }) {
    return (
        <div class="doctors_img2">
            <div class="doctors_img2_1">
                <div class="doctors_img2_txt">
                    <div>{title}</div>
                    <p>
                        <span>{text} </span>
                        {rank}
                    </p>
                    <div>{content}</div>
                </div>
                <div class="doctors_img2_img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default DoctorsImg2;
