import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import service2 from '../assets/service2.png';
import 'react-toastify/dist/ReactToastify.css';

const defaultImage = service2; // Keep a fallback image in public folder

const Services = () => {
  const defaultServices = [
    {
      title: 'Employee Tracking',
      description: 'Track employees in real time with performance insights.',
      image: defaultImage
    },
    {
      title: 'Attendance Management',
      description: 'Automate attendance recording and reports.',
      image: defaultImage
    },
    {
      title: 'Payroll Insights',
      description: 'Detailed analytics on payroll management.',
      image: defaultImage
    },
    {
      title: 'Leave Approvals',
      description: 'Simplified leave request and approval system.',
      image: defaultImage
    }
  ];

  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    image: ''
  });
  const [editServiceIndex, setEditServiceIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('services');
    if (stored) {
      setServices(JSON.parse(stored));
    } else {
      localStorage.setItem('services', JSON.stringify(defaultServices));
      setServices(defaultServices);
    }
  }, []);

  const handleOpen = (index = null) => {
    if (index !== null) {
      setNewService({ ...services[index] });
      setEditServiceIndex(index);
    }
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setNewService({ title: '', description: '', image: '' });
    setEditServiceIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewService({ ...newService, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleAddOrEditService = () => {
    const { title, description, image } = newService;
    if (!title || !description || !image) {
      toast.error('All fields including image are required!');
      return;
    }

    let updated = [...services];
    if (editServiceIndex !== null) {
      updated[editServiceIndex] = newService; // Update the existing service
      toast.success('Service updated!');
    } else {
      updated.push(newService); // Add a new service
      toast.success('Service added!');
    }

    setServices(updated);
    localStorage.setItem('services', JSON.stringify(updated));
    handleClose();
  };

  const handleDeleteService = (index) => {
    const updated = services.filter((_, i) => i !== index);
    setServices(updated);
    localStorage.setItem('services', JSON.stringify(updated));
    toast.success('Service deleted!');
  };

  return (
    <Box sx={{ p: 4, maxWidth: '1200px', margin: '0 auto' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">
          Our Services
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()} sx={{ padding: '10px 20px', fontSize: '16px' }}>
          Add Service
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card elevation={5} sx={{ height: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)' } }}>
              <CardMedia
                component="img"
                height="180"
                image={service.image || defaultImage}
                alt={service.title}
                sx={{ objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#333' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <IconButton onClick={() => handleOpen(index)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteService(index)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Add/Edit Service */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editServiceIndex !== null ? 'Edit Service' : 'Add New Service'}</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label="Service Title"
            name="title"
            value={newService.title}
            onChange={handleChange}
            fullWidth
            sx={{ backgroundColor: '#f9f9f9' }}
          />
          <TextField
            label="Service Description"
            name="description"
            value={newService.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            sx={{ backgroundColor: '#f9f9f9' }}
          />
          <Button component="label" variant="outlined" sx={{ width: '100%' }}>
            Upload Image
            <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
          </Button>
          {newService.image && (
            <Box
              component="img"
              src={newService.image}
              alt="Preview"
              sx={{ width: '100%', maxHeight: 180, objectFit: 'cover', mt: 1 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleAddOrEditService} variant="contained" color="primary">
            {editServiceIndex !== null ? 'Save Changes' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer position="top-center" />
    </Box>
  );
};

export default Services;
