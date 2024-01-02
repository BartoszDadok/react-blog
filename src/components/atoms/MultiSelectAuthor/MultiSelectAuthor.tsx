import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { saveAuthorsIds } from "../../../store/state/posts";
import { convertFullAuthorNamesToIds } from "../../../utils/convertFullAuthorNamesToIds";

type Authors = {
  userId: number;
  name: string;
}[];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  sx: {
    "&& .Mui-selected": {
      backgroundColor: "#e2e2e2",
    },
  },
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultiSelectAuthor({ authors }: { authors: Authors }) {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleSelectedAuthor = (
    event: SelectChangeEvent<typeof personName>
  ) => {
    const {
      target: { value },
    } = event;
    if (Array.isArray(value)) {
      const foundAuthorsIds = convertFullAuthorNamesToIds(value, authors);

      if (foundAuthorsIds.length > 0) {
        dispatch(saveAuthorsIds(foundAuthorsIds));
      } else {
        dispatch(saveAuthorsIds(null));
      }
    }
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl
      sx={{
        display: "flex",
        justifyContent: "center",
        m: 1,
        width: 250,
        mt: 3,
      }}
    >
      <Select
        data-testid='SelectElement'
        multiple
        displayEmpty
        value={personName}
        label='Choose a thing'
        onChange={handleSelectedAuthor}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Select author</em>;
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{
          "aria-label": "Without label",
        }}
      >
        <MenuItem disabled value=''>
          <em>Select author</em>
        </MenuItem>
        {authors.map((author) => (
          <MenuItem
            key={author.userId}
            value={author.name}
            style={getStyles(author.name, personName, theme)}
          >
            {author.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultiSelectAuthor;
