## SECTION 26: ANIMATING REACT APPS

Using framer motion to bring things to life

- "Just CSS" might be enough!
- Bulding more complex animations with framer motion (third party package)
- Animating elements In & Out
- Scroll-based Animations

### Animating with CSS Transitions & Animations

- You might not need an animation libary. CSS transitions & animations might be enough. Features that are built right into vanilla CSS.
- CSS transitions allow you to "tell" CSS to smoothly transition between two CSS property values. Animate via "transition" property.
- transition: transform 0.3s ease-out;
- The idea behind CSS animations is that we define a animation, so a sequence of steps on our own by using the special at key frames syntax here.

### Framer Motion Basics & Fundamentals

- Limitations and complexity with just CSS.
- motion.element: Special motion. Can use animate, to animate element. F.eks: how it should rotate. animate={{ rotate: isExpanded ? 180 : 0 }}
- Now, when using Framer Motion, the animate prop is one of your most important props because it's this prop that's used to declaratively animate an element but another important prop is the transition prop which is a prop that can be used to configure the animation that will be played.
- You do that by passing an object to transition and then here in this object you can set a broad variety of things. For example, the duration over which this change in this value will be animated: transition={{ duration: 0.3, type: "spring" }}
- Nested Animations & Variants: Variants cannot just be used for defining and reusing animation states, but instead they can also be used to trigger animations deep inside of a component tree by just setting an animation to a certain variant on an ancestor component. If they activate in the parent or wrapping component in this modal component here, they will automatically be activated in the child component.
  variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}

### Imperative Animations

- And it's just important to be aware of the fact that you're not limited to animating just the scale, opacity, or position with numbers, but that you can also animate more complex things like colors with Framer Motion.
- We can trigger an animation imperatively from inside our code(i kodelogikken), instead of only on the JSX code. const [scope, animate] = useAnimate(); And use animate in the code to animate how you want. And scope, set it to ref={scope}, to scope what you want to target and animate. So ref={scope} on the element you want to animate, when a code runs.
- If you have a scenario where an element needs to move to a new position, like here if I mark the first item as completed, now this is animated. If you add this layout prop to the element that is moving: <motion.li layout>

### Forskjellig

- Orchestrating Multi-Element Animations: Animate Item that dissapear: We can add our exit prop to define the animation we wanna play as an item is removed.
- Animating Shared Elements:
  <motion.div layoutId="tab-indicator" className="active-tab-indicator" />
  It will basically automatically detect whenever you are rendering another element with the same layoutId in a different place of your page and it will automatically play a smooth animation.
- Re-triggering Animations via Keys: You can actually restart this animation, you can reset this component so to say. Make React think that it just appeared. But in React, even if you're not using Framer Motion, keys also have another purpose. When you add them on an element and you then change the value that's assigned to the key. For example, because of some state change, React will basically destroy the old component instance and render a new one instead. So you can add that key prop to any component of your choice and change that value then to get React to recreate that component. And that will reset any internal state stored in that component, and also therefore re-trigger any entry animations that should be played.

### Scroll-based Animations

-
