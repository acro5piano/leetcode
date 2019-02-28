import * as assert from 'assert'

class BSTNode {
  value: number
  left: BSTNode | null = null
  right: BSTNode | null = null

  constructor(value: number) {
    this.value = value
  }

  clone() {
    const node = new BSTNode(this.value)
    if (this.left) {
      node.left = this.left.clone()
    }
    if (this.right) {
      node.right = this.right.clone()
    }
    return node
  }

  push(value: number) {
    if (value < this.value) {
      if (this.left) {
        this.left.push(value)
        return
      }
      this.left = new BSTNode(value)
    } else {
      if (this.right) {
        this.right.push(value)
        return
      }
      this.right = new BSTNode(value)
    }
  }

  search(value: number): boolean {
    if (value === this.value) {
      return true
    }
    if (value < this.value && this.left) {
      return this.left.search(value)
    }
    if (value > this.value && this.right) {
      return this.right.search(value)
    }
    return false
  }

  findLargest(): BSTNode {
    return this.right ? this.right.findLargest() : this
  }

  delete(value: number) {
    if (this.left) {
      if (value === this.left.value) {
        if (!this.left.left && !this.left.right) {
          this.left = null
          return
        }
        if (this.left.left && !this.left.right) {
          this.left = this.left.left
          return
        }
        if (!this.left.left && this.left.right) {
          this.left = this.left.right
          return
        }
        if (this.left.left && this.left.right) {
          const oldLeft = this.left.left.clone()
          const replacing = this.left.right.clone()
          this.left = this.left.left.findLargest()
          this.left.left = oldLeft
          this.left.right = replacing
          return
        }
      } else {
        this.left.delete(value)
      }
    }
    if (this.right) {
      if (value === this.right.value) {
        if (!this.right.left && !this.right.right) {
          this.right = null
          return
        }
        if (this.right.left && !this.right.right) {
          this.right = this.right.left
          return
        }
        if (!this.right.left && this.right.right) {
          this.right = this.right.right
          return
        }
        if (this.right.left && this.right.right) {
          const oldLeft = this.right.left.clone()
          const replacing = this.right.right.clone()
          this.right = this.right.left.findLargest()
          this.right.left = oldLeft
          this.right.right = replacing
          return
        }
      } else {
        this.right.delete(value)
      }
    }
  }

  enumerate() {
    this.value
  }
}

class BST {
  rootNode: BSTNode

  constructor(value: number) {
    this.rootNode = new BSTNode(value)
  }

  push(value: number) {
    this.rootNode.push(value)
  }

  search(value: number) {
    return this.rootNode.search(value)
  }

  delete(value: number) {
    return this.rootNode.delete(value)
  }

  enumerate() {
    return this.rootNode.enumerate()
  }
}

const bst = new BST(8)
bst.push(3)
bst.push(10)
bst.push(1)
bst.push(6)
bst.push(14)
bst.push(4)
bst.push(7)
bst.push(13)
bst.push(9)
bst.push(0)
bst.push(2)

console.log(JSON.stringify(bst, undefined, 4))

assert.equal(true, bst.search(6))
assert.equal(true, bst.search(7))
assert.equal(true, bst.search(8))
assert.equal(false, bst.search(5))
assert.equal(false, bst.search(18))

bst.delete(3)
bst.delete(10)
bst.delete(13)

console.log(JSON.stringify(bst, undefined, 4))

assert.equal(true, bst.search(1))
assert.equal(true, bst.search(9))
assert.equal(false, bst.search(3))
assert.equal(false, bst.search(13))
