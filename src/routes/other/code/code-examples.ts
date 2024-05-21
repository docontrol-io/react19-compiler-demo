export const refAsPropExample = `
function MyInput({placeholder, ref}) {
  return <input placeholder={placeholder} ref={ref} />
}

//...
<MyInput ref={ref} />

<input
  ref={(ref) => {
    // ref created

    // NEW: return a cleanup function to reset
    // the ref when element is removed from DOM.
    return () => {
      // ref cleanup
    };
  }}
/>
`

export const serverComponents = `
  // Server components and server action for Fullstack frameworks like Next and Remix
  
  "use client"
  
  "use server"
`