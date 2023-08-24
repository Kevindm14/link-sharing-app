import { Link } from "../../utils/types/link";

interface LinkState {
  links: Link[];
}

interface LinkActions {
  setLinks: (links: Link[]) => void;
}
