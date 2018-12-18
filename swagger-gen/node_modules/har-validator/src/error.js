export default function HARError (errors) {
  this.name = 'HARError'
  this.errors = errors
}

HARError.prototype = Error.prototype
