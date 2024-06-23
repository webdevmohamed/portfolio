<template>
    <div class="education">
        <h2 class="title">Education.</h2>
        <div class="main-timeline">
            <div class="timeline">
                <div class="timeline-content first-education">
                    <div class="education-container">
                        <div class="education-title"><b>Bachillerato</b></div>
                        <div class="education-school"><i>IES Juan Antonio Castro</i></div>
                    </div>
                    <div class="line"></div>
                    <div class="content">
                        <span><b>2016 - 2018</b></span>
                    </div>
                </div>

                <div class="timeline-content second-education">
                    <div class="education-container">
                        <div class="education-title"><b>Administración de Sistemas Informáticos en Red</b></div>
                        <div class="education-school"><i>IES Ribera del Tajo</i></div>
                    </div>
                    <div class="line"></div>
                    <div class="content">
                        <span><b>2018 - 2020</b></span>
                    </div>
                </div>

                <div class="timeline-content third-education">
                    <div class="education-container">
                        <div class="education-title"><b>Desarrollo de Aplicaciones Multiplataforma</b></div>
                        <div class="education-school"><i>IES Ribera del Tajo</i></div>
                    </div>
                    <div class="line"></div>
                    <div class="content">
                        <span><b>2021 - Actual</b></span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "EducationComponent"
}
</script>
<style scoped>
.education .title {
    font-weight: bold;
    font-size: 50px;
    margin: 0px auto 80px auto;
    width: fit-content;
    text-align: center;
    position: relative;
    z-index: 1;
}


.education .title::before {
    content: "";
    position: absolute;
    width: 70px;
    height: 50px;
    background-color: #68a506;
    opacity: 0.3;
    right: 0;
    top: 15px;
    z-index: -1;
}

.education .main-timeline {
    display: flex;
    justify-content: center;
    padding: 150px 0px;
}

.education .main-timeline .timeline {
    width: 90%;
    height: 2px;
    background: #c6c6c6;
    position: relative;
}

.education .main-timeline .timeline .timeline-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -80px;
}

.education .main-timeline .timeline .timeline-content.first-education {
    left: 0;
}

.education .main-timeline .timeline .timeline-content.second-education {
    left: 30%;
}

.education .main-timeline .timeline .timeline-content.third-education {
    right: 0;
}

.education .main-timeline .timeline .timeline-content .education-container {
    margin-bottom: 30px;
    text-align: center;
}

.education .main-timeline .timeline .timeline-content .line {
    width: 2px;
    height: 100px;
    background: #c6c6c6;
    position: relative;
    margin-top: 15px;
}


.education .main-timeline .timeline .timeline-content .content {
    position: relative;
    top: 26px;
    z-index: 1;
    width: 135px;
    height: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 6px;
    font-size: 20px;

}

.education .main-timeline .timeline .timeline-content .line:before,
.education .main-timeline .timeline .timeline-content .line:after {
    content: "";
    width: 20px;
    height: 20px;
    line-height: 18px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease-out 0s
}


.education .main-timeline .timeline .timeline-content .line:before {
    background: #fff;
    border: 2px solid #68a506;
    left: -9px;
    top: -26px;
}

.education .main-timeline .timeline .timeline-content .line:after {
    border: 2px solid #c6c6c6;
    left: -5px;
    top: -20px;
}

.education .main-timeline .timeline .timeline-content:hover .line:before {
    top: -20px
}

.education .main-timeline .timeline .timeline-content:hover .line:after {
    top: -26px
}


.education .main-timeline .timeline .timeline-content .content:before,
.education .main-timeline .timeline .timeline-content .content:after {
    content: "";
    width: 135px;
    height: 80px;
    line-height: 18px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease-out 0s;
    z-index: -1;
}


.education .main-timeline .timeline .timeline-content .content:before {
    background: #fff;
    border: 2px solid #68a506;

}

.education .main-timeline .timeline .timeline-content .content:after {
    border: 2px solid #c6c6c6;
    left: -5px;
    top: -6px;
}

.education .main-timeline .timeline .timeline-content:hover .content:before {
    top: -6px
}

.education .main-timeline .timeline .timeline-content:hover .content:after {
    top: 0px
}
</style>