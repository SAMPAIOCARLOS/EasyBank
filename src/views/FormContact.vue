<script>
    export default {
        name: 'FormContact',
        data() {
            return {
                data_create_form: [
                    {type: 'text', name: 'Name', message: 'Fill in this field!'},
                    {type: 'email', name: 'Email', message: 'Fill in this field!'},
                    {type: 'phone', name: 'Phone', message: 'Fill in this field!', placeholder: '(xx) xxxxx-xxxx'},
                ],
                show_span: false
            }
        },
        methods: {
            submitForm() {
                const name = this.$refs.name
                const email = this.$refs.email
                const phone = this.$refs.phone
                const textarea = this.$refs.textarea

                 this.validInput(name)
                 this.validInput(email)
                 this.validInput(phone)
                 this.validInput(textarea)

            },
            validInput(input) {
                
                if(input.value.length < 1) {
                    input.classList.add('input_error')
                    this.show_span = true
                } else {
                    input.classList.remove('input_error')
                    this.show_span = false
                }
            }
            
        }
    }
</script>

<template>
    <form @submit.prevent>
        <aside class="aside_form">
            <label for="Name">Name</label>
            <input @input="closeInput" ref="name" type="text" id="Name">

            <span v-if="show_span">Fill in this field!</span>
        </aside>

        <aside class="aside_form">
            <label for="">Email</label>
            <input ref="email" type="text" id="" placeholder="">

            <span v-if="show_span">Fill in this field!</span>
        </aside>

        <aside class="aside_form">
            <label for="Phone">Phone</label>
            <input ref="phone" type="phone" id="Phone" placeholder="(xx) xxxxx-xxxx">

            <span v-if="show_span">Fill in this field!</span>
        </aside>

        <aside class="aside_form">
            <label for="textarea">your message(optional)</label>
            <textarea ref="textarea" name="textarea" id="textarea"></textarea>
        </aside>

        <aside class="aside_form">
            <button @click="submitForm">send your message</button>
        </aside>

    </form>
</template>

<style scoped>
form {
    /* border: 2px solid rgb(66, 211, 182); */
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
}

.aside_form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #ffffff;
}
input {
    background-color: #ffffff30;
    padding: 0.7vw;
    border: 3px solid transparent;
    outline: none;
    border-radius: 0.5vw;
    color: #ffffff;
    font-size: 1.5vw;
    transition: all 0.5s;
}
input:focus {
    border: 3px solid #ffffff;
}
input::placeholder {
    color: #ffffff;
}
textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 7vw;
    max-height: 7vw;
    border-radius: 0.5vw;
    background-color: #ffffff30;
    border: 3px solid transparent;
    transition: all 0.5s;
    outline: none;
}
textarea:focus {
    border: 3px solid #ffffff;
}

span {
    font-weight: bold;
    color: red;
}
.input_error {
    border: 3px solid red;
    box-shadow: 1px 1px 20px rgb(255, 0, 0);
}
button {
    padding: 1vw;
    border-radius: 1vw;
    background: linear-gradient(45deg, rgb(66, 211, 182), rgb(94, 239, 210));
    font-weight: bold;
    font-size: 1.2vw;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s;
    color: #fff;
}
button:hover {
    background: linear-gradient(45deg, rgb(41, 241, 201), rgb(21, 197, 162));
    transform: scale(1.05);
}
@media(max-width: 900px) {
    form {
        width: 100%;
        padding: 100px 0 0 0;
    }

    input {
        padding: 1.5vw;
        border-radius: 1.3vw;
        font-size: 2.2vw;
    }

    textarea {
        min-height: 12vw;
        max-height: 12vw;
        border-radius: 2vw;
    }

    button {
        padding: 2vw;
        border-radius: 3vw;
        font-size: 2vw;
    }
}

@media(max-width: 550px) {
    input {
        padding: 2vw;
        font-size: 3vw;
    }

    textarea {
        min-height: 15vw;
        max-height: 15vw;
    }

    button {
        padding: 3vw;
        border-radius: 3vw;
        font-size: 3vw;
    }
}
</style>