import React, { useState } from 'react';
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormSelect, CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import { cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../../components/index'
import '../../../../admin2/scss/style.scss'
import '../../../../admin2/scss/examples.scss'
import '../../../../admin2/scss/custom.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import api from '../../../../../api/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function AddBanner() {
    const navigate = useNavigate();
    const [heading, setHeading] = useState('');
    const [subheading, setSubheading] = useState('');
    const [content, setContent] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('heading', heading);
        formData.append('subheading', subheading);
        formData.append('content', content);
        formData.append('number', number);
        if (image) formData.append('image', image); // append file
        formData.append('status', 1);

        try {
            const response = await api.post('/banners/add-banner', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.success) {
                toast.success('Banner created successfully!');

                // Wait a short time so the user can see the toast
                setTimeout(() => {
                    navigate('/admin/banner'); // navigate to banner list page
                }, 1000); // 1.5 seconds
            } else {
                toast.error(response.data.message || 'Failed to create banner');
            }
        } catch (error) {
            console.error(error);
            alert('Error creating banner');
        }
    };
    return (
        <div>
            <AppSidebar />

            <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader />
                <div className="body flex-grow-1 p-3">
                    <div className='row bg-white mx-1 mb-3 py-3 shadow-sm'>
                        <div className='col-lg-12 d-flex align-items-center'>
                            <CBreadcrumb className="mb-0">
                                <CBreadcrumbItem style={{ textDecoration: 'none' }}><Link to="/admin/dashboard" className='text-decoration-none'>Home</Link>/Add Banner</CBreadcrumbItem>
                            </CBreadcrumb>
                        </div>

                    </div>
                    <div className='row mb-3'>
                        <div className='col-lg-6'>
                            <CBreadcrumb className="mx-3 mb-4">
                                <CBreadcrumbItem style={{ textDecoration: 'none' }}></CBreadcrumbItem>
                            </CBreadcrumb>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-end'>
                            <Link to="/admin/banner" className='text-decoration-none'>
                                <CButton className='custom-button text-white align-items-center d-flex gap-2'>
                                    <CIcon icon={cilArrowLeft} size="lg" />
                                    Back
                                </CButton>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white p-3'>
                        <CForm className="row g-3" onSubmit={handleSubmit}>
                            <CCol md={6}>
                                <CFormInput
                                    type="text"
                                    label="Heading"
                                    value={heading}
                                    onChange={(e) => setHeading(e.target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput
                                    type="text"
                                    label="Sub Heading"
                                    value={subheading}
                                    onChange={(e) => setSubheading(e.target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput
                                    type="text"
                                    label="Content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput
                                    type="number"
                                    label="Number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </CCol>
                            <CCol md={12}>
                                <CFormInput
                                    type="file"
                                    label="Image Carousel"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </CCol>
                            <CCol xs={12}>
                                <CButton color="primary" type="submit">
                                    Submit
                                </CButton>
                            </CCol>
                        </CForm>
                    </div>
                </div>
                <AppFooter />
            </div>
        </div>
    )
}
