export class Player {
  constructor(name, avatar) {
    this.name = name
    this.avatar = avatar
    this.score = 0
  }

  get PlayerTemplateCard() {
    return `
    <div class="card mt-3 my-2">
      <section class="row card-body text-center">
        <div class="col-6 fs-3">
          ${this.avatar} ${this.name}
        </div>
        <div class="col-6 fs-3">
          <button>-</button> ${this.score} <button>+</button>
        </div>
      </section>
    </div>`
  }
}