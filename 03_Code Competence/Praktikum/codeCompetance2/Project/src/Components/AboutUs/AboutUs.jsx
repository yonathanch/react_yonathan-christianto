import primacode from '../../assets/primacode.jpg'
import './AboutUs.css'
const AboutUs = () => {


    return(
        <>
        <div className='content-aboutus'>
            <div className="container content">
                <h1 className=' about-us'>About Us</h1>
                <div className='image-container d-flex justify-content-center align-items-center' >
                    <img src={primacode} alt="img-aboutus" className='primacode'/>
                    <div>
                        <p>Selamat datang di website kami, Bootcamp PRIMACODE! Kami adalah lembaga pelatihan teknologi yang fokus pada pengembangan keterampilan teknis dan soft skill untuk membantu peserta kami meraih sukses di dunia kerja.</p>
                        <p>Kami berkomitmen untuk memberikan pelatihan berkualitas tinggi yang didesain sesuai kebutuhan industri saat ini. Para instruktur kami adalah para ahli dengan pengalaman kerja yang luas di industri teknologi.</p>
                        <p>Kami menawarkan berbagai program pelatihan di berbagai bidang teknologi, mulai dari pemrograman web dan mobile, desain grafis, analisis data, hingga pengembangan game. Setiap program kami dirancang untuk memberikan pengalaman belajar yang terstruktur dan intensif, sehingga peserta kami dapat memperoleh keterampilan yang dibutuhkan untuk memulai atau mengembangkan karir mereka di industri teknologi.</p>
                        <p>kami berusaha untuk memberikan kesempatan kepada siapa saja untuk mengembangkan keterampilan mereka melalui program pelatihan kami. Mari bergabung dengan kami dan bersama-sama kita dapat meraih sukses di dunia kerja teknologi.</p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
    )
}

export default AboutUs