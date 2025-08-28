1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
if you take single element with dom then you can use getElementById. if you take multiple element with class name with dom then you can use getElementsByClassName and
if you take first tag or class or id from same tag or class or id name then you can use querySelector and if you take all element form same tag or same class or id
then you can use querySelector. you can use event handler with only getElementById and querySelector .

3. How do you **create and insert a new element into the DOM**?
   first of all you have to select parent tag where you insert your create element .I am showing blewo
   const parentTag = document.getElementById("body");
   const p = document.createElement('p');
   p.innerText = 'i want be a software engineer in the future means within 4 months';
   parentTag.appendChild(p);

   
   3. What is **Event Bubbling** and how does it work?
   Event bubbling means when an event happens on an element, it first runs on that element, then moves upward to its parent, grandparent, and
   so on until it reaches the root.
  You can stop this flow with event.stopPropagation()


  4. What is **Event Delegation** in JavaScript? Why is it useful?

     Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding listeners to multiple child elements.
     The event bubbles up from the child to the parent, and the parent handles it by checking the event target.
     It’s useful because it reduces memory usage, makes code simpler, and works even for dynamically added elements.

 5. What is the difference between **preventDefault() and stopPropagation()** methods?

    preventDefault() stops the browser’s default behavior for an event stopping a form from submitting or a link from navigating.

   stopPropagation() stops the event from bubbling up (or capturing down) the DOM tree, so parent elements won’t receive the event.

  
