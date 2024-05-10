<template>
    <div class="education">
        <h2 class="title">Education.</h2>
        <div class="main-timeline">
            <div class="timeline">
                <div class="timeline-content">
                    <div class="line"></div>
                    <div class="content"> 2016 - 2018</div>
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
}

.education .main-timeline .timeline {
    width: 70%;
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
}

.education .main-timeline .timeline .timeline-content .line {
    width: 2px;
    height: 100px;
    background: #c6c6c6;
    position: relative;
    margin-top: 15px;
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
</style>