<template>
    <div>

            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="title-list">
                            <p class="track-title">Scale</p>
                            <div class="nav flex-column" role="tablist" aria-orientation="vertical">
                                <a v-for="(scale, index) in filteredTrackScale" class="nav-link" :class="{ 'active': index === 0 }" :id="'tab'+scale.Id" :href="'#'+scale.Id" data-toggle="pill" role="tab" :aria-controls="scale.Id">{{ scale.Title }}
                                <div class="speaker" v-for="speaker in scale.Speakers">
                                    {{speaker.FirstName}} {{speaker.LastName}}, {{speaker.Company}}
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="tab-content">
                            <div v-for="(scale, index) of filteredTrackScale" class="tab-pane fade" :class="{ 'show active': index === 0 }" :id="scale.Id" role="tabpanel" :aria-labelledby="'tab'+scale.Id">
                                <h1>{{scale.Title}}</h1>
                                <div v-for="speaker in scale.Speakers">
                                <p class="font-weight-bold">{{speaker.FirstName}} {{speaker.LastName}}, {{speaker.Company}}</p>
                                </div>
                                <p>{{scale.Description}}</p>
                                <p><a href="#">See the Q&A from this talk and others here.</a></p>
                                <h3>About the Speaker</h3>
                                <div v-for="speaker in scale.Speakers">
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
            filteredTrackScale() {
                return this.ItemsArray.filter(ItemsArray => {
                    return ItemsArray.Track.Title == "Scale"
                })

            }
        }

    }
</script>