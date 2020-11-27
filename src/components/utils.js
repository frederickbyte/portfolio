export function getClassForCategory(category) {
  var cssClass = "tag "
  switch (category) {
    case "hobby":
      cssClass += "hobby"
      break
    case "philosophy":
      cssClass += "philosophy"
      break
    case "politics":
      cssClass += "politics"
      break
    case "software":
      cssClass += "software"
      break
    case "tech":
      cssClass += "tech"
      break
    case "non-fiction":
      cssClass += "non-fiction"
      break
    default:
  }
  return cssClass
}
