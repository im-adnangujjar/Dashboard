export const styles={

    animate:{
    position: 'relative',
    animation: 'mymove 10s',
    animationPlayState: 'start',
  },
  
  @keyframes mymove: {
    from {right: 20px;}
    to {right: 60px;}
  }
}