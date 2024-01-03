function review(rev?: number | boolean) {
  switch(rev) {
    case 1:
      console.log("Agradecemos pela sua review. Vamos nos esforçar para melhorar nossos serviços!");
      break;
    case 2:
      console.log("Agradecemos pela sua review. Vamos nos esforçar para melhorar nossos serviços!");
      break;
    case 3:
      console.log("Agradecemos pela sua review. Vamos nos esforçar para melhorar nossos serviços!");
      break;
    case 4:
      console.log("Agradecemos pela sua review. Vamos nos esforçar para melhorar ainda mais nossos serviços!");
      break;
    case 5:
      console.log("Agradecemos pela sua review. Vamos nos esforçar para melhorar ainda mais nossos serviços!");
      break;
    case false:
      console.log("Continue comprando conosco!")
  }
}

review(1)
review(2)
review(3)
review(4)
review(5)
review(false)