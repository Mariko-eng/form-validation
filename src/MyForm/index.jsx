import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

const MyForm = () => {

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is Required"),
    number: Yup.number().required("Number is Required"),
    select: Yup.string().required("Select is Required"),
    image: Yup.mixed()
      .required("Please select a image")
      .test(
        "fileSize",
        "File size is too large",
        (value) => value && value.size <= 1024000 // 1MB
      )
      .test(
        "fileType",
        "Unsupported file format",
        (value) =>
          value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      ),
    file: Yup.mixed()
      .required("Please select a file")
      .test(
        "fileSize",
        "File size is too large",
        (value) => value && value.size <= 10240000 // 10MB
      ),
    date: Yup.date().required("Required"),
    datetime: Yup.date().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      number: "",
      select: "",
      image: null,
      file: null,
      date: "",
      datetime: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ marginBottom: "20px" }}
      />

      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        sx={{ marginBottom: "20px" }}
      />

      <TextField
        fullWidth
        id="number"
        name="number"
        label="Number"
        type="number"
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
        sx={{ marginBottom: "20px" }}
      />

      <FormControl fullWidth>
        <InputLabel id="select-label">Select</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          name="select"
          value={formik.values.select}
          onChange={formik.handleChange}
          error={formik.touched.select && Boolean(formik.errors.select)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
        {formik.touched.select && formik.errors.select && (
          <div style={{ color: "red" }}>{formik.errors.select}</div>
        )}
      </FormControl>

      <Box sx={{ marginBottom: "20px" }}>
        <p>Select Image</p>
        <FormControl fullWidth>
          <input
            accept="image/*"
            id="image"
            type="file"
            name="image"
            onChange={(event) =>
              formik.setFieldValue("image", event.currentTarget.files[0])
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image && (
            <div style={{ color: "red" }}>{formik.errors.image}</div>
          )}
        </FormControl>
      </Box>

      <Box sx={{ marginBottom: "20px" }}>
        <p>Select File</p>
        <FormControl fullWidth>
          <input
            id="file"
            type="file"
            name="file"
            onChange={(event) =>
              formik.setFieldValue("file", event.currentTarget.files[0])
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.file && formik.errors.file && (
            <div style={{ color: "red" }}>{formik.errors.file}</div>
          )}
        </FormControl>
      </Box>

      <TextField
        fullWidth
        id="date"
        name="date"
        type="date"
        value={formik.values.date}
        onChange={formik.handleChange}
        error={formik.touched.date && Boolean(formik.errors.date)}
        helperText={formik.touched.date && formik.errors.date}
        sx={{ marginBottom: "20px" }}
      />

      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        {/* <InputLabel id="select-label">Select Date Time</InputLabel> */}
        <TextField
          fullWidth
          id="datetime"
          name="datetime"
          type="datetime-local"
          value={formik.values.datetime}
          onChange={formik.handleChange}
          error={formik.touched.datetime && Boolean(formik.errors.datetime)}
          helperText={formik.touched.datetime && formik.errors.datetime}
          sx={{ marginBottom: "20px" }}
        />
      </FormControl>

      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
