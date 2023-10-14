
export const projectModel = (
  projectName,
  projectDescription,
  projectDate,
  projectTechs,
  projectImages,
  projectURLs,
  projectAwards
) => {
  return {
    projectName: projectName,
    projectDescription: projectDescription,
    projectDate: projectDate,
    projectTechs: projectTechs,
    projectImages: projectImages,
    projectURLs: projectURLs,
    projectAwards: projectAwards,
  };
};

export const portfolioWorkModel = (
  workTitle,
  workDescription,
  workImages,
  workDate, 
  workTechs
) => {
  return {
    workTitle: workTitle,
    workDescription: workDescription,
    workImages: workImages,
    workDate: workDate,
    workTechs: workTechs,
  };
};

export const portfolioReferenceModel=(referenceImg,referenceCompanyName)=>{
    return{
        referenceImg:referenceImg,
        referenceCompanyName:referenceCompanyName
    }
}

export const skillModel = (skillName, skillDescription) => {
  return {
    skillName: skillName,
    skillDescription: skillDescription,
  };
}
