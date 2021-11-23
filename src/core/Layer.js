import * as shortId from "shortid"

class Layer {
    constructor(name = null) {
        this.id = shortId.generate()
        this.name = name
        this.canvasRef = null // Reference to the actual canvas element it needs for drawing
        this.isVisible = true
        this.isLocked = false
        this.listeners = []
    }

    onUpdate() {
        console.log(`Layer updated (id = ${this.id})`)
        this.listeners.forEach(listener => listener())
    }

    addUpdateListener(listener) {
        this.listeners.push(listener)
    }

    toggleVisibility() {
        this.isVisible = !this.isVisible
        console.log("Visibility", this.isVisible)
        this.onUpdate()
    }

    toggleLock() {
        this.isLocked = !this.isLocked
        console.log("Locked", this.isLocked)
        this.onUpdate()
    }
}

export default Layer