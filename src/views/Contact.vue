<template>
    <transition name="slideup">
        <div v-if="show" class="contact container">
            <div class="title">
                <div class="underline"></div>
                <h3>Contact us</h3>
            </div>
            <p v-show="error" class="error-message">
                There was a problem sending the message.
            </p>
            <div v-show="success" class="thanks-message">
                <h4>Thanks for contacting us.</h4>
                <h5>We will get back to you soon.</h5>
            </div>
            <form
                v-show="!success"
                class="contact-form"
                @submit.prevent="sendEmail"
            >
                <div class="col-lg-8 px-0">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-field">
                                <label>Name</label>
                                <input
                                    type="text"
                                    v-model="template.user_name"
                                    name="user_name"
                                />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    v-model="template.user_email"
                                    name="user_email"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-field">
                        <label>Message</label>
                        <textarea
                            name="message"
                            v-model="template.message"
                        ></textarea>
                    </div>
                    <input class="cool-button" type="submit" value="Send" />
                </div>
            </form>
        </div>
    </transition>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
    data() {
        return {
            template: {
                user_name: '',
                user_email: '',
                message: '',
                to_name: 'Belu Shop'
            },
            show: false,
            success: false,
            error: false
        }
    },
    methods: {
        sendEmail() {
            emailjs
                .send(
                    'gmail',
                    'template_x2wa8DX1',
                    this.template,
                    'user_wszZN19U4EXLZiE5jtrfq'
                )
                .then(
                    // eslint-disable-next-line no-unused-vars
                    result => {
                        this.success = true
                    },
                    // eslint-disable-next-line no-unused-vars
                    error => {
                        this.error = true
                    }
                )
        }
    },
    mounted() {
        this.show = true
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/global.scss';
@import '@/scss/animations.scss';

.contact {
    margin-top: 20px;
    h3 {
        font-family: $title;
        text-align: left;
    }
    .error-message {
        text-align: left;
        color: $blue;
    }
    .thanks-message {
        text-align: left;
        min-height: 350px;
        margin-top: 70px;

        h4 {
            font-size: 30px;
        }
        h4,
        h5 {
            font-family: $title;
            margin-top: 15px;
        }
    }
    .contact-form {
        .form-field {
            margin-top: 20px;
            label {
                float: left;
                margin-bottom: 15px;
                height: 24px;
                transition: font-size 0.2s;
            }
            &:focus-within {
                label {
                    color: $aqua;
                    font-size: 13px;
                    transition: font-size 0.2s;
                }
            }
        }
        input[type='text'],
        input[type='email'] {
            width: 100%;
            border: none;
            border-bottom: 1px solid $aqua;
            border-radius: 0;
            &:focus {
                border-bottom: 0;
                box-shadow: -1px 5px 9px 0px #c4efee;
            }
        }
        textarea {
            width: 100%;
            height: 150px;
            border: 1px solid $aqua;
            border-radius: 5px;
            padding: 10px 15px;
            &:focus {
                outline-color: #c4efee;
                box-shadow: 0px 0px 10px 3px rgba(196, 239, 238, 0.5);
            }
        }
        input[type='submit'] {
            text-align: left;
            display: block;
        }
    }
}
</style>
