<template>
    <div>

            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="title-list">
                            <p class="track-title">Plan</p>
                            <div class="nav flex-column" role="tablist" aria-orientation="vertical">
                                <a v-for="(plan, index) in filteredTrackPlan" class="nav-link" :class="{ 'active': index === 0 }" :id="'tab'+plan.Id" :href="'#'+plan.Id" data-toggle="pill" role="tab" :aria-controls="plan.Id">{{ plan.Title }}
                                <div class="speaker" v-for="speaker in plan.Speakers">
                                    {{speaker.FirstName}} {{speaker.LastName}}, {{speaker.Company}}
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="tab-content">
                            <div v-for="(plan, index) of filteredTrackPlan" class="tab-pane fade" :class="{ 'show active': index === 0 }" :id="plan.Id" role="tabpanel" :aria-labelledby="'tab'+plan.Id">
                                <h1>{{plan.Title}}</h1>
                                <div v-for="speaker in plan.Speakers">
                                <p class="font-weight-bold">{{speaker.FirstName}} {{speaker.LastName}}, {{speaker.Company}}</p>
                                </div>
                                <p>{{plan.Description}}</p>
                                <p><a href="#">See the Q&A from this talk and others here.</a></p>
                                <h3>About the Speaker</h3>
                                <div v-for="speaker in plan.Speakers">
                                    <p class="font-weight-bold">{{speaker.FirstName}} {{speaker.LastName}}, {{speaker.Company}}</p>
                                    <p class="speaker">{{speaker.Biography}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>

<style scoped>
    .container {
        color:#172B4D;
    }
    h3 {
        margin:20px 0px;
    }
    .title-list {
        margin-bottom:40px;
    }
    .track-title {
        font-size:22px;
        font-weight:bold;
    }
    .nav-link {
        color:#172B4D;
        font-weight:bold;
        padding:15px;
        border-top: 1px solid #989898;
        &.active {
            background-color:#f2f2f2;
        }
    }
    .speaker {
        color:#989898;
        font-size:14px;
        font-weight:normal;
    }
</style>

<script>
    import {mapState} from "vuex"

    export default {
        computed: {
            ItemsArray() {
                return this.$store.state.Items;
            },
            filteredTrackPlan() {
                return this.ItemsArray.filter(ItemsArray => {
                    return ItemsArray.Track.Title == "Plan"
                })

            }
        }

    }
</script>