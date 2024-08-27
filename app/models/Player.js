export class Player {
  constructor(name, avatar) {
    this.name = name
    this.avatar = avatar
    this.score = 0
  }

  get displayName() {
    const displayName = `${this.avatar} ${this.name}`
    return displayName
  }

  get PlayerTemplateCard() {
    return `
    <div class="card mt-3 my-2">
      <section class="row card-body text-center">
        <div class="col-6 fs-3">
          ${this.displayName}
        </div>
        <div class="col-6 fs-3">
          <button onClick="app.playersController.losePoint('${this.name}')">-</button> ${this.score} <button onClick="app.playersController.scorePoint('${this.name}')">+</button>
        </div>
      </section>
    </div>`
  }
}