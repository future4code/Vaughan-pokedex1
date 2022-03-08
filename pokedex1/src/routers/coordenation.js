export const goToHomePage =(navigate)=>{ 
    navigate("/");
}
export const goToPokedex=(navigate)=>{ 
    navigate("/pokedex");
}
export const goToDetails=(navigate, id)=>{ 
    navigate(`/${id}`);
}