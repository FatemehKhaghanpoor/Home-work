import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  mainCity: yup.string().required(" !لطفا اسم استان را وارد کنید"),

  subCity: yup.string().required("!لطفا اسم شهر را وارد کنید"),
});

const SelectCity = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    const data = require("../../database/city-iran.json");
    const cityNamesArray = Object.keys(data);
    const subCityArray = Object.values(data);

    SetMainCity(cityNamesArray);
    SetListOfSubCity(subCityArray);
  }, []);

  

  const [MainCity, SetMainCity] = useState([]);
  const [listOfSubCity, SetListOfSubCity] = useState([]);
  const [selectedSubCity, SetSelectedSubCity] = useState([]);
  let selectedCityIndex = 0;
  const onSubmit = (userData) => {
   
    console.log(userData);
    setValue('subCity',"")
   
   

  };

  return (
    <Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white w-auto h-96 mx-5 mt-20 rounded-lg ">
            {/*header */}
            <div className="h-28 flex justify-center items-center  shadow">
              <p className="uppercase font-bold text-4xl">شهر خود را انتخاب کنید </p>
            </div>
            {/* body*/}
            <div className="grid  justify-center mt-14 ">
              <div>
                {/* selector1 -------------------------*/}
                <select
                  className={`mb-6 w-96 rounded-lg text-3xl ${
                    errors.mainCity &&
                    "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  }`}
                  {...register("mainCity", { required: true })}
                  aria-invalid={errors.mainCity ? "true" : "false"}
                  onChange={(e) => {
                   
                    selectedCityIndex = MainCity.indexOf(e.target.value);

                    SetSelectedSubCity(listOfSubCity[selectedCityIndex]);
                    
                                  
               
                    
                  }}
                  
                >
                  <option value="">یک مورد را انتخاب کنید </option>
                  {MainCity.map((item) => {
                  

                    return <option key={item}>{item}</option>;
                  })}

                  {/* exampleRequired*/}
                </select>
                <p className="text-red-500 mb-4">{errors.mainCity?.message}</p>
              </div>

              {/* selector2 -------------------------*/}
              <div>
                <select
                  className={`w-96 rounded-lg text-3xl ${
                    errors.subCity &&
                    "focus:border-red-500 focus:ring-red-500 border-red-500 "
                  }`}
              
                  {...register("subCity", { required: true })}
                  aria-invalid={errors.subCity ? "true" : "false"}

                  onChange={(e) => {
                   
                    
                    setValue('subCity', e.target.value, { shouldValidate: true })
                                  
               
                    
                  }}
                >
                  <option value="">یک مورد را انتخاب کنید </option>
                  {selectedSubCity.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}

                  {/* exampleRequired*/}
                </select>
                <p className="text-red-500 mb-4 mt-2">
                  {errors.subCity?.message}
                </p>
              </div>
            </div>
            {/* button*/}
            <div className="flex justify-center items-center mt-14">
              <input
                type="submit"
                value="Submit"
                className="w-2/5 h-10 bg-yellow-700 text-white rounded-lg "
              ></input>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default SelectCity;
