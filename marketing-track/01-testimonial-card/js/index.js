// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

function truncateText(text, maxLength = 100) {
  let truncated = text.split(" ");
  if (truncated.length > maxLength) {
    return truncated.slice(0, maxLength).join(" ") + "...";
  } else {
    return text;
  }
}

const testimonial = document.querySelector(".testimonial");

testimonial.textContent = truncateText(testimonial.textContent);
