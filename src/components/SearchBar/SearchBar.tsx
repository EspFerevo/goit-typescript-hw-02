import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import React, {FormEvent} from "react";

interface SearchBarProps{
  onSearch: (values: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const searchImg = (form.elements.namedItem('searchImg') as HTMLInputElement).value;

    if (searchImg.trim() === "") {
      toast("Search field is empty!", {
        style: {
          color: "red",
        },
      });
      return;
    }

    onSearch(searchImg);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchImg"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}